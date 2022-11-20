package com.ngnt.smartmuseum.client;

import java.util.Set;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import com.ngnt.smartmuseum.model.Cluster;
import com.ngnt.smartmuseum.model.Exhibit;
import com.ngnt.smartmuseum.model.ViewEvent;

@FeignClient(url = "localhost:9000")
public interface PersistenceClient {

	@GetMapping(path = "/exhibits")
	Set<Exhibit> getExhibits();

	@GetMapping(path = "/clusters")
	Set<Cluster> getClusters();

	@GetMapping(path = "/analytics")
	Set<ViewEvent> getViewEvents();

}