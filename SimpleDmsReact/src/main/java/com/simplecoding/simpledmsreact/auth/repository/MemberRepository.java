package com.simplecoding.simpledmsreact.auth.repository;

import com.simplecoding.simpledmsreact.auth.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, String> {
}

