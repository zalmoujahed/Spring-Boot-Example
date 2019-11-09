package com.group27.NouveauScrum;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.group27.NouveauScrum.h2Database.model.ProjectResponse;
import com.group27.NouveauScrum.h2Database.model.StoryResponse;
import com.group27.NouveauScrum.h2Database.model.TaskResponse;
import com.group27.NouveauScrum.h2Database.model.UserResponse;
import com.group27.NouveauScrum.h2Database.repositories.ProjectRepository;
import com.group27.NouveauScrum.h2Database.repositories.StoryRepository;
import com.group27.NouveauScrum.h2Database.repositories.TaskRepository;
import com.group27.NouveauScrum.h2Database.repositories.UserRepository;
import com.group27.NouveauScrum.info.Project;
import com.group27.NouveauScrum.info.Story;
import com.group27.NouveauScrum.info.Task;
import com.group27.NouveauScrum.info.User;

import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NouveauScrumController {

	@Autowired
    UserRepository userRepo;
	
	@Autowired
	ProjectRepository projRepo;
	
	@Autowired
	StoryRepository storyRepo;
	
	@Autowired
	TaskRepository taskRepo;
	
	
	@GetMapping("/")
	public String home() {
		return "index";
	}
	

	@RequestMapping("/getAllUsers")
	@ResponseBody
	public List<User> findAll(){
		List<User> result = new ArrayList<User>();

		for(UserResponse u : userRepo.findAll()){
			
			User user = new User();
			user.setId(u.getId());
			user.setFirstName(u.getFirstName());
			user.setLastName(u.getLastName());
			user.setEmail(u.getEmail());
			user.setPassword(u.getPassword());

			result.add(user);
		}

		return result;
	}
	
	@RequestMapping("/addNewUser/{first}/{last}/{email}/{pass}")
	@ResponseBody
	public List<User> addNewUser(@PathVariable String first, @PathVariable String last, @PathVariable String email, @PathVariable String pass){
		List<User> result = new ArrayList<User>();

		userRepo.save(new UserResponse(first, last, email, pass));
		for(UserResponse u : userRepo.findAll()){
			
			User user = new User();
			user.setId(u.getId());
			user.setFirstName(u.getFirstName());
			user.setLastName(u.getLastName());
			user.setEmail(u.getEmail());
			user.setPassword(u.getPassword());

			result.add(user);
		}

		return result;
	}
	
	@RequestMapping("/getAllProjects/{userId}")
	@ResponseBody
	public List<Project> allProjects(@PathVariable int userId){
		List<Project> result = new ArrayList<Project>();

		
		for(ProjectResponse u : projRepo.findAll()){
			
			if(userId == u.getUserId()) {
			
				Project proj = new Project();
				proj.setId(u.getPid());
				proj.setName(u.getName());
				proj.setDescription(u.getDescription());
				proj.setUserID(u.getUserId());
				
				result.add(proj);
			}
		}

		return result;
	}
	
	@RequestMapping("/addNewProj/{name}/{desc}/{userID}")
	@ResponseBody
	public List<Project> addNewProj(@PathVariable String name, @PathVariable String desc, @PathVariable int userID){
		List<Project> result = new ArrayList<Project>();

		projRepo.save(new ProjectResponse(name, desc, userID));
		
		for(ProjectResponse u : projRepo.findAll()){
			
			if(userID == u.getUserId()) {
				
				Project proj = new Project();
				proj.setId(u.getPid());
				proj.setName(u.getName());
				proj.setDescription(u.getDescription());
				proj.setUserID(u.getUserId());
	
				result.add(proj);
			}
		}

		return result;
	}

	@RequestMapping("/addNewStory/{name}/{desc}/{projectId}")
	@ResponseBody
	public List<Story> addNewStory(@PathVariable String name, @PathVariable String desc, @PathVariable int projectId){
		List<Story> result = new ArrayList<Story>();

		storyRepo.save(new StoryResponse(name, desc, "sandbox", projectId));
		for(StoryResponse u : storyRepo.findAll()){

			if(projectId == u.getProjectId()) {
				Story story = new Story();
				story.setId(u.getId());
				story.setName(u.getName());
				story.setDescription(u.getDescription());
				story.setProjectId(u.getProjectId());
	
				result.add(story);
			}
		}

		return result;
	}
	
	@RequestMapping("/getAllStories/{projectId}")
	@ResponseBody
	public List<Story> allStories(@PathVariable int projectId){
		List<Story> result = new ArrayList<Story>();

		
		for(StoryResponse u : storyRepo.findAll()){
			
			if(projectId == u.getProjectId()) {
				Story story = new Story();
				story.setId(u.getId());
				story.setName(u.getName());
				story.setSpace(u.getSpace());
				story.setDescription(u.getDescription());
				
				result.add(story);
			}
		}
	
		return result;
	}
	
	@RequestMapping("/addNewTask/{name}/{desc}/{storyId}")
	@ResponseBody
	public List<Task> addNewTask(@PathVariable String name, @PathVariable String desc, @PathVariable int storyId){
		List<Task> result = new ArrayList<Task>();

		taskRepo.save(new TaskResponse(name, desc, storyId));
		for(TaskResponse u : taskRepo.findAll()){

			if(storyId == u.getStoryId()) {
				Task task = new Task();
				task.setId(u.getId());
				task.setName(u.getName());
				task.setDescription(u.getDescription());
				task.setStoryId(u.getStoryId());
	
				result.add(task);
			}
		}

		return result;
	}
	
	@RequestMapping("/getAllTasks/{storyId}")
	@ResponseBody
	public List<Task> allTask(@PathVariable int storyId){
		List<Task> result = new ArrayList<Task>();

		for(TaskResponse u : taskRepo.findAll()){
			
			if(storyId == u.getStoryId()) {
				Task task = new Task();
				task.setId(u.getId());
				task.setName(u.getName());
				task.setDescription(u.getDescription());
				task.setStoryId(u.getStoryId());
				
				result.add(task);
			}
		}
	
		
		return result;
	}
}