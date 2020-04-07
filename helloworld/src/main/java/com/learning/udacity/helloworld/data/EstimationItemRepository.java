package com.learning.udacity.helloworld.data;

import com.learning.udacity.helloworld.entity.EstimationItem;
import org.springframework.data.repository.CrudRepository;

public interface EstimationItemRepository  extends CrudRepository<EstimationItem, Long> {
}
