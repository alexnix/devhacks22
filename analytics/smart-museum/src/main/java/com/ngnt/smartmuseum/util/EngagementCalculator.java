package com.ngnt.smartmuseum.util;

import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.ngnt.smartmuseum.model.Cluster;
import com.ngnt.smartmuseum.model.Exhibit;
import com.ngnt.smartmuseum.model.ViewEvent;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EngagementCalculator {

	private final ReadingTimeCalculator readingTimeCalculator;

	public double getClusterEngagement(Set<Exhibit> exhibits, Set<ViewEvent> viewEvents, Cluster cluster) {
		Set<Exhibit> exhibitsInCluster = getAllExhibitsInCluster(exhibits, cluster.getId());
		return getClusterEngagement(exhibitsInCluster, viewEvents);
	}

	public Set<Exhibit> getAllExhibitsInCluster(Set<Exhibit> exhibits, String clusterId) {
		return exhibits.stream().filter(exhibit -> exhibit.getClusterId().equals(clusterId))
				.collect(Collectors.toSet());
	}

	public double getClusterEngagement(Set<Exhibit> exhibits, Set<ViewEvent> viewEvents) {
		return exhibits.stream()
				.mapToDouble(exhibit -> getExhibitEngagement(exhibit, viewEvents))
				.average()
				.orElse(0);

	}

	public double getExhibitEngagement(Exhibit exhibit, Set<ViewEvent> viewEvents) {
		return viewEvents.stream()
				.filter(viewEvent -> viewEvent.getExhibitId().equals(exhibit.getId()))
				.mapToDouble(viewEvent ->
						getEngagementScore(exhibit.getDescription(),
								viewEvent.getTimeSpentInSeconds()))
				.average()
				.orElse(0);
	}

	public double getEngagementScore(String description, int spentTime) {
		int readingTimeInSeconds = readingTimeCalculator.getReadingTimeInSeconds(description);
		double engagementScore = ((double) spentTime / readingTimeInSeconds) * 100;

		// it can happen people spend more time than the estimated reading time
		return engagementScore > 100 ? 100 : engagementScore;
	}
}
