package com.spring.webshop.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = "email")
})
public class User {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String name;
	
	@Email
	@Column
	private String email;

	@Column
	private String imageUrl;
	
	@Column
	private Boolean emailVerified = false;
	
	@JsonIgnore
	private String password;
	
	@Column
	@NotNull
	@Enumerated(EnumType.STRING)
	private AuthProvider provider;
	
	@Column
	private String providerId;
}
