package com.learning.udacity.helloworld.data;

import com.learning.udacity.helloworld.entity.Estimate;
import org.springframework.data.repository.CrudRepository;

public interface EstimateRepository  extends CrudRepository<Estimate, Long> {
}
