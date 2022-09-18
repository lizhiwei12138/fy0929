package com.fy.fy0929.mapper;

import com.fy.fy0929.entity.Test;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestMapper {
    List<Test> selectAll();
    String selectById(Long id);

}
