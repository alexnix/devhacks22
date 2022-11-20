package com.ngnt.smartmuseum.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ViewEvent {

	String id;
	String userId;
	String exhibitId;
	String clusterId;
	int timeSpentInSeconds;
}
