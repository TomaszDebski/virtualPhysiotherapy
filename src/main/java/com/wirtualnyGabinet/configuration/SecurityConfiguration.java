package com.wirtualnyGabinet.configuration;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;

import io.github.jhipster.security.AjaxAuthenticationFailureHandler;
import io.github.jhipster.security.AjaxAuthenticationSuccessHandler;
import io.github.jhipster.security.AjaxLogoutSuccessHandler;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled=true)
@PropertySource("classpath:application.properties")
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	Environment env;
	
	@Autowired
	DataSource dataSource;
	
	@Bean
    public AjaxAuthenticationSuccessHandler ajaxAuthenticationSuccessHandler() {
        return new AjaxAuthenticationSuccessHandler();
    }

    @Bean
    public AjaxAuthenticationFailureHandler ajaxAuthenticationFailureHandler() {
        return new AjaxAuthenticationFailureHandler();
    }
    
    @Bean
    public AjaxLogoutSuccessHandler ajaxLogoutSuccessHandler() {
        return new AjaxLogoutSuccessHandler();
    }

	 @Autowired
	    public void configureGlobalSecurity(AuthenticationManagerBuilder auth) throws Exception {
	        auth
	        .jdbcAuthentication().dataSource(dataSource)
			.usersByUsernameQuery(
				"select username,password,'true' as enabled from Physiotherapist where username=?")
			.authoritiesByUsernameQuery(
				"select username, role from Physiotherapist where username=?")
				.passwordEncoder(passwordEncoder())
				;
	    }
	     
	    @Override
	    protected void configure(HttpSecurity http) throws Exception {
	       
	      http
	      .authorizeRequests()
	        .antMatchers("/index.html", "/home.html", "/login.html", "/").permitAll()
	        .antMatchers("/register").permitAll()
	        .antMatchers("/login").permitAll()
//	        .antMatchers("/api/**").authenticated()
	        .antMatchers("/physiotherapist/byUsername/**").permitAll()
	        .antMatchers("/physiotherapist").permitAll()
	        .antMatchers("/physiotherapist/**").access("hasRole('ROLE_USER')")
	        .antMatchers("/visit/**").access("hasRole('ROLE_USER')")
	        .antMatchers("/patient/**").authenticated()
	        .antMatchers("/#/patient/**").access("hasRole('ROLE_USER')")
	        .antMatchers("/interview/**").access("hasRole('ROLE_USER')")
	        .antMatchers("/kindOfPain/**").access("hasRole('ROLE_USER')")
	        .antMatchers("/findUser/**").access("hasRole('ROLE_USER')")
	        .antMatchers("/service/**").access("hasRole('ROLE_USER')")
	        	.and()
	        .formLogin()
	        	.loginProcessingUrl("/login")
	        	.loginPage("/#login")
	        	.successHandler(ajaxAuthenticationSuccessHandler())
	            .failureHandler(ajaxAuthenticationFailureHandler())
	            .usernameParameter("j_username")
	            .passwordParameter("j_password")
	            .permitAll()
	        .and()
		        .logout()
	            .logoutUrl("/logout")
	            .logoutSuccessHandler(ajaxLogoutSuccessHandler())
	            .permitAll()
//	        .exceptionHandling().accessDeniedPage("/Access_Denied")
	        	.and()
	        		.csrf()
	        	 .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
//	        	.csrf().disable();
//	        .addFilterAfter(new CsrfHeaderFilter(), CsrfFilter.class)
//	        .csrf().csrfTokenRepository(csrfTokenRepository());
	    }
	    
	    @Bean
	    public PasswordEncoder passwordEncoder() {
	        return new BCryptPasswordEncoder();
	    }
	    
	    private CsrfTokenRepository csrfTokenRepository() {
			HttpSessionCsrfTokenRepository repository = 
					new HttpSessionCsrfTokenRepository();
			repository.setHeaderName("X-XSRF-TOKEN");
			return repository;
		}
	    

}
