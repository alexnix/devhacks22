package com.ngnt.smartmuseum.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ExhibitResponse {
	int id;
	int clusterId;
	String description;
	double engagement;

	public static ExhibitResponse fromExhibit(Exhibit exhibit, double engagement) {
		return new ExhibitResponse(exhibit.id, exhibit.getClusterId(), exhibit.getDescription(), engagement);
	}
}
