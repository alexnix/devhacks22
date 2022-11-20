package com.ngnt.smartmuseum.config;

import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.openfeign.FeignAutoConfiguration;
import org.springframework.context.annotation.Configuration;

import com.ngnt.smartmuseum.client.PersistenceClient;

@Configuration
@AutoConfigureAfter(FeignAutoConfiguration.class)
@EnableFeignClients(clients = PersistenceClient.class)
public class FeignConfiguration {

}
