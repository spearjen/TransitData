select station, sta_id, latitude, longitude, objectid
	from rail_stops
union all
select stop_id, stop_name, stop_lat, stop_long, objectid
	from bus_stops
union all




select stts from rail_stops

 duplicates AS (
	SELECT 
		stop_id, 
		stop_name, 
		stop_lat, 
		stop_long, 
		ROW_NUMBER() OVER(
		PARTITION BY 
			stop_name, 
			stop_lat, 
			stop_long
		ORDER BY
			stop_name, 
			stop_lat, 
			stop_long	
		) row_num
		FROM 
			bus_stops
	)
DELETE FROM duplicates
where row_num >1;