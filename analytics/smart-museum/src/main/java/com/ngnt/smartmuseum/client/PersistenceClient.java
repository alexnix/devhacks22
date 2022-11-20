package com.ngnt.smartmuseum.client;

import java.util.Set;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

import com.ngnt.smartmuseum.config.FeignConfiguration;
import com.ngnt.smartmuseum.model.AuthRequest;
import com.ngnt.smartmuseum.model.Cluster;
import com.ngnt.smartmuseum.model.Exhibit;
import com.ngnt.smartmuseum.model.Token;
import com.ngnt.smartmuseum.model.ViewEvent;

@FeignClient(name = "persistenceClient", url = "localhost:8090/api/",
configuration = FeignConfiguration.class)
public interface PersistenceClient {

	@GetMapping(path = "collections/exhibits/records")
	Exhibit.ExhibitList getExhibits(@RequestHeader String authorization);

	@GetMapping(path = "collections/clusters")
	Set<Cluster> getClusters(@RequestHeader String authorization);

	@GetMapping(path = "collections/view_entries/records")
	Set<ViewEvent> getViewEvents(@RequestHeader String authorization);

	@PostMapping(path = "admins/auth-with-password")
	Token auth(@RequestBody AuthRequest body, @RequestHeader String contentType);

}