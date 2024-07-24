package org.hj.service;

import org.hj.mapper.LoginsMapper;
import org.hj.model.logins;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginsServicelmpl implements LoginsService {

    @Autowired
    LoginsMapper loginsMapper;

    @Override
    public logins logins(logins member) {
        System.out.println("service=" + member);
        logins result = loginsMapper.logins(member.getId(), member.getPassword());
        System.out.println("service return=" + result);
        return result; 
    }
}
