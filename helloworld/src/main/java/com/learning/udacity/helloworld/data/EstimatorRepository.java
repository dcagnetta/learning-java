package com.learning.udacity.helloworld.data;

import com.learning.udacity.helloworld.entity.Estimator;
import org.springframework.data.repository.CrudRepository;

public interface EstimatorRepository extends CrudRepository<Estimator, Long> {
}
