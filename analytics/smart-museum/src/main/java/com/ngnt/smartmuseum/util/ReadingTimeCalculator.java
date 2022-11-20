package com.ngnt.smartmuseum.util;

import org.springframework.stereotype.Component;

import lombok.NonNull;

@Component
public class ReadingTimeCalculator {

	private static final double AVERAGE_WORDS_PER_SECOND = 1;
	private static final String EMPTY_SPACES_REGEX = "\\s+";


	public int getReadingTimeInSeconds(@NonNull String text) {
		var numberOfWords = text.split(EMPTY_SPACES_REGEX).length * 10;

		return (int) (numberOfWords / AVERAGE_WORDS_PER_SECOND);
	}
}
