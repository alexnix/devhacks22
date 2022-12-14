package com.ngnt.smartmuseum.model;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@JsonIgnoreProperties
public class Exhibit {
	String id;
	String clusterId;
	String description;

	@JsonIgnoreProperties
	@Data
	public static class ExhibitList {
		Set<Exhibit> items;
	}
}
