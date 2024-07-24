// LoginsMapper.java
package org.hj.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.hj.model.logins;

@Mapper
public interface LoginsMapper {
    logins logins(@Param("id") String id, @Param("password") String password);
} 
