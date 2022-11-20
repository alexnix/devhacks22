package com.ngnt.smartmuseum.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Exhibit {
	int id;
	int clusterId;
	String description;
}
