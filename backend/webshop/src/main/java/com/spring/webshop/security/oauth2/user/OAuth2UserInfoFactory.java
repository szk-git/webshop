package com.spring.webshop.security.oauth2.user;

import java.util.Map;

import com.spring.webshop.exceptions.OAuth2AuthenticationProcessingException;
import com.spring.webshop.model.AuthProvider;

public class OAuth2UserInfoFactory {
	public static OAuth2UserInfo getOAuth2UserInfo(String registrationId, Map<String, Object> attributes) throws OAuth2AuthenticationProcessingException {
        if (registrationId.equalsIgnoreCase(AuthProvider.GITHUB.toString())) {
            return new GithubOAuth2UserInfo(attributes);
        } else {
            throw new OAuth2AuthenticationProcessingException("Sorry! Login with " + registrationId + " is not supported yet.");
        }
    }
}
