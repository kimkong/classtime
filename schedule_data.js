// Class Time Minder
// 2018 Dr. Kenny Kim dynaWEBworks
//
// TIME MUST BE IN 24HRS
// SUNDAY = 0  MONDAY = 1
base_time = new Date("2018-08-09 18:30:00")
schedule_name = "default";			// name from data array


function test_pertime(min_offset) {
	// testing function
	var test_t = new Date()
	test_t.setMinutes(test_t.getMinutes()+min_offset);
	test_t.setSeconds(0);
	test_str = 	test_t.getHours()+":"+test_t.getMinutes();

	return test_str;
}

data = [
{
	name: "Regular Block ODD",
	dow: [2,4,6,0],
	type: "HS",
	periods: [
		{ name: 'Period 0 (Optional)',	start_time: '7:20',  end_time: '8:21' },
		{ name: 'Passing to Period 1',	start_time: '8:21',  end_time: '8:30' },
    { name: 'Period 1',             start_time: '8:30',  end_time: '9:50' },
		{ name: 'Period 1 Support',	  	start_time: '9:50',  end_time: '10:10' },
		{ name: 'Snack',								start_time: '10:10', end_time: '10:19' },
		{ name: 'Passing to Period 3',	start_time: '10:19', end_time: '10:25' },
    { name: 'Period 3',             start_time: '10:25', end_time: '11:45' },
		{ name: 'Period 3 Support', 		start_time: '11:45', end_time: '12:05' },
		{ name: 'Lunch',        				start_time: '12:05', end_time: '12:45' },
		{ name: 'Passing to Period 5',	start_time: '12:45', end_time: '12:51' },
    { name: 'Period 5',             start_time: '12:51', end_time: '14:11' },
		{ name: 'Period 5 Support',			start_time: '14:11', end_time: '14:31' },
		{ name: 'Passing to P.R.I.D.E.',start_time: '14:31', end_time: '14:37' },
		{ name: 'P.R.I.D.E.',						start_time: '14:37', end_time: '15:36' }
	]
},
{
	name: "Regular Block EVEN",
	dow: [3,5,0],
	type: "HS",
	periods: [
    { name: 'Period 0 (Optional)',  start_time: '7:20',  end_time: '8:21' },
    { name: 'Passing to Period 2',  start_time: '8:21',  end_time: '8:30' },
    { name: 'Period 2',             start_time: '8:30',  end_time: '9:50' },
    { name: 'Period 2 Support',     start_time: '9:50',  end_time: '10:10' },
    { name: 'Snack',                start_time: '10:10', end_time: '10:19' },
    { name: 'Passing to Period 4',  start_time: '10:19', end_time: '10:25' },
    { name: 'Period 4',             start_time: '10:25', end_time: '11:45' },
    { name: 'Period 4 Support',     start_time: '11:45', end_time: '12:05' },
    { name: 'Lunch',                start_time: '12:05', end_time: '12:45' },
    { name: 'Passing to Period 6',  start_time: '12:45', end_time: '12:51' },
    { name: 'Period 6',             start_time: '12:51', end_time: '14:11' },
    { name: 'Period 6 Support',     start_time: '14:11', end_time: '14:31' },
    { name: 'Passing to P.R.I.D.E.',start_time: '14:31', end_time: '14:37' },
    { name: 'P.R.I.D.E.',           start_time: '14:37', end_time: '15:36' }
	]
},


{
	name: "Block Monday",
	dow: [1],
	type: "HS",
	periods: [
		{ name: 'Passing to Period 1', 	start_time: '8:30',  end_time: '10:00' },
		{ name: 'Period 1', 						start_time: '10:00', end_time: '10:44' },
		{ name: 'Passing to Period 2', 	start_time: '10:44', end_time: '10:50' },
		{ name: 'Period 2', 						start_time: '10:50', end_time: '11:36' },
		{ name: 'Snack', 								start_time: '11:36', end_time: '11:45' },
		{ name: 'Passing to Period 3', 	start_time: '11:45', end_time: '11:51' },
		{ name: 'Period 3', 						start_time: '11:51', end_time: '12:35' },
		{ name: 'Passing to Period 4',  start_time: '12:35', end_time: '12:41' },
		{ name: 'Period 4',       			start_time: '12:41', end_time: '13:25' },
		{ name: 'Lunch',         				start_time: '13:25', end_time: '13:56' },
		{ name: 'Passing to Period 5',	start_time: '13:56', end_time: '14:02' },
		{ name: 'Period 5',							start_time: '14:02', end_time: '14:46' },
		{ name: 'Passing to Period 6',	start_time: '14:46', end_time: '14:52' },
		{ name: 'Period 6',							start_time: '14:52', end_time: '15:36' }
	]
},


{
	name: "Finals ??",
	dow: [],
	type: "",
	periods: [
		{ name: 'Period 0 (Optional)', 	start_time: '6:44',  end_time: '7:54' },
		{ name: 'Passing to First', 		start_time: '7:54',  end_time: '8:00' },
		{ name: 'First', 						    start_time: '8:00',  end_time: '10:10' },
		{ name: 'Snack', 								start_time: '10:10', end_time: '10:30' },
		{ name: 'Passing to Second', 		start_time: '10:30', end_time: '10:36' },
		{ name: 'Second', 							start_time: '10:36', end_time: '12:46' },
	]
},
{
	name: "Minimum",
	dow: [],
	type: "",
	periods: [
		{ name: 'Period 0 (Optional)', 		start_time: '7:20',  end_time: '8:21' },
		{ name: 'Passing to Period 1', 		start_time: '8:21',  end_time: '8:30' },
		{ name: 'Period 1', 							start_time: '8:30',  end_time: '9:11' },
		{ name: 'Passing to Period 2', 		start_time: '9:11',  end_time: '9:17' },
		{ name: 'Period 2', 							start_time: '9:17',  end_time: '9:59' },
		{ name: 'Passing to Period 3', 		start_time: '9:59',  end_time: '10:05' },
		{ name: 'Period 3', 							start_time: '10:05', end_time: '10:46' },
		{ name: 'Snack', 									start_time: '10:46', end_time: '10:55' },
		{ name: 'Passing to Period 4', 		start_time: '10:55', end_time: '11:01' },
		{ name: 'Period 4', 							start_time: '11:01', end_time: '11:42' },
		{ name: 'Passing to Period 5', 		start_time: '11:42', end_time: '11:48' },
		{ name: 'Period 5', 							start_time: '11:48', end_time: '12:29' },
		{ name: 'Passing to Period 6', 		start_time: '12:29', end_time: '12:35' },
		{ name: 'Period 6', 							start_time: '12:35', end_time: '13:16' }	
	]
},
{
  name: "Rally",
  dow: [],
  type: "",
  periods: [
    { name: 'Period 0 (Optional)',    start_time: '7:20',  end_time: '8:21' },
    { name: 'Passing to Period 1',    start_time: '8:21',  end_time: '8:30' },
    { name: 'Period 1',               start_time: '8:30',  end_time: '9:15' },
    { name: 'Passing to Period 2',    start_time: '9:15',  end_time: '9:21' },
    { name: 'Period 2',               start_time: '9:21',  end_time: '10:11' },
    { name: 'Snack',                  start_time: '10:11', end_time: '10:21' },
    { name: 'Passing to Period 3',    start_time: '10:21', end_time: '10:27' },
    { name: 'Period 3',               start_time: '10:27', end_time: '11:12' },
    { name: 'Passing to Rally 4A',    start_time: '11:12', end_time: '11:18' },
    { name: 'Rally 4A',               start_time: '11:18', end_time: '12:11' },
    { name: 'Passing to Rally 4B',    start_time: '12:11', end_time: '12:21' },
    { name: 'Rally 4B',               start_time: '12:21', end_time: '13:14' },
    { name: 'Lunch',                  start_time: '13:14', end_time: '13:54' },
    { name: 'Passing to Period 5',    start_time: '13:54', end_time: '14:00' },
    { name: 'Period 5',               start_time: '14:00', end_time: '14:45' },
    { name: 'Passing to Period 6',    start_time: '14:45', end_time: '14:51' },
    { name: 'Period 6',               start_time: '14:51', end_time: '15:36' }  
  ]
},
{
	name: "Block",
	dow: [],
	type: "",
	periods: [
	  { name: 'Period 0 (optional)', start_time: '6:44', end_time: '7:54' },
	  { name: 'Passing to Period A', start_time: '7:54', end_time: '8:00' },
	  { name: 'Period A',            start_time: '8:00', end_time: '10:00' },
	  { name: 'Snack',   						 start_time: '10:00', end_time: '10:14' },
	  { name: 'Passing to Period B', start_time: '10:14', end_time: '10:20' },
	  { name: 'Period B',            start_time: '10:20', end_time: '12:20' },
	  { name: 'Lunch',   						 start_time: '12:20', end_time: '13:00' },
	  { name: 'Passing to Period C', start_time: '13:00', end_time: '13:06' },
	  { name: 'Period C',            start_time: '13:06', end_time: '15:06' }
	]
},
{
	name: "Test ??",
	dow: [],
	type: "",
	periods: [
	  { name: 'Period 0',            start_time: test_pertime(0),  end_time: test_pertime(1) },
	  { name: 'Passing to Period 1', start_time: test_pertime(1),  end_time: test_pertime(2) },
	  { name: 'Period 1',            start_time: test_pertime(2),  end_time: test_pertime(3) },
	  { name: 'Passing to Period 2', start_time: test_pertime(3),  end_time: test_pertime(4) },
	  { name: 'Passing to Period 3', start_time: test_pertime(4),  end_time: test_pertime(5) },
		{ name: 'Period 3', 					 start_time: test_pertime(5),  end_time: test_pertime(6) },
		{ name: 'Passing to Period 4', start_time: test_pertime(6),  end_time: test_pertime(7) },
		{ name: '4A Rally', 					 start_time: test_pertime(7),  end_time: test_pertime(8) },
		{ name: 'Period 4', 					 start_time: test_pertime(8),  end_time: test_pertime(9) },
		{ name: 'Lunch', 							 start_time: test_pertime(9),  end_time: test_pertime(10) },
		{ name: 'Passing to Period 5', start_time: test_pertime(10), end_time: test_pertime(11) },
		{ name: 'Period 5', 					 start_time: test_pertime(11), end_time: test_pertime(12) },
		{ name: 'Passing to Period 6', start_time: test_pertime(12), end_time: test_pertime(13) },
		{ name: 'Period 6', 					 start_time: test_pertime(13), end_time: test_pertime(14) }	
	]
}
]






// {
// 	name: "Testing",
// 	dow: [],
// 	type: "",
// 	periods: [
// 	  { name: 'Period 0',            start_time: test_pertime(0), end_time: test_pertime(1) },
// 	  { name: 'Passing to Period 1', start_time: test_pertime(1), end_time: test_pertime(2) },
// 	  { name: 'Period 1',            start_time: test_pertime(2), end_time: test_pertime(3) },
// 	  { name: 'Passing to Period 2', start_time: test_pertime(3), end_time: test_pertime(4) },
// 	]
// }