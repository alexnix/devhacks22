package com.ngnt.smartmuseum.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ViewEvent {

	int id;
	int userId;
	int exhibitId;
	int clusterId;
	int timeSpentInSeconds;
}
