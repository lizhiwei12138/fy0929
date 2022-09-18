package com.fy.fy0929.service;

import com.fy.fy0929.entity.Test;
import com.fy.fy0929.mapper.TestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestService implements TestMapper{
    @Autowired
    TestMapper testMapper;

    @Override
    public List<Test> selectAll() {
        return testMapper.selectAll();
    }

    @Override
    public String selectById(Long id) {
        return testMapper.selectById(id);
    }
}
