package com.simplecoding.simpledmsreact.booking.repository;

import com.simplecoding.simpledmsreact.booking.entity.Booking;
import com.simplecoding.simpledmsreact.booking.dto.BookingDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Optional;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    @Query("SELECT new com.simplecoding.simpledmsreact.booking.dto.BookingDto(" +
            "b.bid, b.member.email,b.publicCar.pid,b.publicCar.carName, b.startTime, b.endTime, b.status)\n" +
            "FROM Booking b\n" +
            "WHERE b.publicCar.carName like %:searchKeyword%\n " +
            "and b.status='R'" +
            "order by b.insertTime desc")
    Page<BookingDto> selectByBookingList(@Param("searchKeyword") String searchKeyword, Pageable pageable);

    @EntityGraph(attributePaths = {"member","publicCar"})
    @Query("select b from Booking b\n" +
            "where b.bid = :bid")
    Optional<Booking> selectById(@Param("bid") Long bid);

    @Query("select count(b) from Booking b\n" +
            "where b.startTime <= :endTime\n" +
            "and   b.endTime >= :startTime " +
            "and b.publicCar.pid=:pid " +
            "and b.status='R'")
    long existsByBooking(@Param("startTime") LocalDateTime startTime
            , @Param("endTime") LocalDateTime endTime
            , @Param("pid") Long pid
    );
}
