package com.ngnt.smartmuseum.controller;

import static com.ngnt.smartmuseum.model.ExhibitResponse.fromExhibit;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ngnt.smartmuseum.client.PersistenceClient;
import com.ngnt.smartmuseum.model.Cluster;
import com.ngnt.smartmuseum.model.Exhibit;
import com.ngnt.smartmuseum.model.ExhibitResponse;
import com.ngnt.smartmuseum.model.OptimisationConfig;
import com.ngnt.smartmuseum.model.ViewEvent;
import com.ngnt.smartmuseum.util.EngagementCalculator;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/smart-museum")
@RequiredArgsConstructor
public class OptimumOrderController {


	private final EngagementCalculator engagementCalculator;
	private PersistenceClient persistenceClient;

	private static final double BEST_CLUSTERS_PERCENTAGE = (double) 1 / 5;
	private static final double WORST_CLUSTERS_PERCENTAGE = (double) 1 / 10;


	@PostMapping(path = "/exhibits")
	public List<ExhibitResponse> getOptimumExhibitsOrder(@RequestBody OptimisationConfig optimisationConfig) {

		Set<Exhibit> exhibits = new HashSet<>();
		Set<Cluster> clusters = new HashSet<>();
		Set<ViewEvent> viewEvents = new HashSet<>();
		IntStream.range(1, 20).forEach(i -> {
			exhibits.add(new Exhibit(i, i, "a a a a a a a a a a"));
			clusters.add(new Cluster(i, "name"));
			viewEvents.add(new ViewEvent(i, i, i, i, i));
		});

		//Set<Exhibit> exhibits = persistenceClient.getExhibits();
		//Set<Cluster> clusters = persistenceClient.getClusters();
		//Set<ViewEvent> viewEvents = persistenceClient.getViewEvents();

		List<Cluster> sortedClusters = clusters.stream()
				.sorted(Comparator.comparingDouble(cluster -> engagementCalculator.getClusterEngagement(exhibits, viewEvents, (Cluster) cluster)).reversed())
				.collect(Collectors.toList());

		List<Cluster> optimisedClusters = getOptimisedClusters(
				sortedClusters,
				optimisationConfig.isRemove(),
				optimisationConfig.isReorder());

		return buildExhibitsResponse(exhibits, viewEvents, optimisedClusters);
	}

	private List<ExhibitResponse> buildExhibitsResponse(Set<Exhibit> exhibits, Set<ViewEvent> viewEvents, List<Cluster> optimisedClustersList) {
		return optimisedClustersList.stream()
				.map(cluster -> engagementCalculator.getAllExhibitsInCluster(exhibits, cluster.getId()))
				.flatMap(Collection::stream)
				.map(exhibit -> fromExhibit(exhibit, engagementCalculator.getExhibitEngagement(exhibit, viewEvents)))
				.collect(Collectors.toList());
	}

	private List<Cluster> getOptimisedClusters(List<Cluster> sortedClusters, boolean remove, boolean reorder) {
		int size = sortedClusters.size();
		int bestClustersBatchSize = (int) (size * BEST_CLUSTERS_PERCENTAGE);
		int worstClusterBatchSize = (int) (size * WORST_CLUSTERS_PERCENTAGE);

		List<Cluster> optimisedClustersList = new ArrayList<>();

		if (remove && reorder) {
			optimisedClustersList.addAll(sortedClusters.subList(0, bestClustersBatchSize));
			optimisedClustersList.addAll(sortedClusters.subList(bestClustersBatchSize * 2, size - worstClusterBatchSize));
			optimisedClustersList.addAll(sortedClusters.subList(bestClustersBatchSize, bestClustersBatchSize * 2));
		}
		else if (remove) {
			optimisedClustersList.addAll(sortedClusters.subList(0, size - worstClusterBatchSize));
		}
		else if (reorder) {
			optimisedClustersList.addAll(sortedClusters.subList(0, bestClustersBatchSize));
			optimisedClustersList.addAll(sortedClusters.subList(bestClustersBatchSize * 2, size));
			optimisedClustersList.addAll(sortedClusters.subList(bestClustersBatchSize, bestClustersBatchSize * 2));
		}

		return optimisedClustersList;
	}

}
