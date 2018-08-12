// Class Time Minder
// 2018 Dr. Kenny Kim dynaWEBworks
//
// TIME MUST BE IN 24HRS
// SUNDAY = 0  MONDAY = 1
base_time = new Date("2018-08-09 18:30:00")
schedule_name = "default";			// name from data array
schedule_type = "MS";  	// MS or HS


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
	name: "Regular Day MS",
	dow: [2,3,4,5,6,0],
	type: "MS",
	periods: [
		{ name: 'Period 0 (Optional)',	start_time: '6:44', end_time: '7:54' },
		{ name: 'Passing to Period 1',	start_time: '7:54', end_time: '8:00' },
		{ name: 'Period 1',							start_time: '8:00', end_time: '8:58' },
		{ name: 'Passing to Period 2',	start_time: '8:58', end_time: '9:04' },
		{ name: 'Period 2',							start_time: '9:04', end_time: '10:10' },
		{ name: 'Snack',								start_time: '10:10', end_time: '10:19' },
		{ name: 'Passing to Period 3',	start_time: '10:19', end_time: '10:25' },
		{ name: 'Period 3',							start_time: '10:25', end_time: '11:23' },
		{ name: 'Lunch (7-8)',					start_time: '11:23', end_time: '11:54' },
		{ name: 'Passing (7-8)',				start_time: '11:54', end_time: '12:00' },
		{ name: 'Period 4 (7-8)',				start_time: '12:00', end_time: '12:58' },
		{ name: 'Passing to Period 5',	start_time: '12:58', end_time: '13:04' },
		{ name: 'Period 5',							start_time: '13:04', end_time: '14:02' },
		{ name: 'Passing to Period 6',	start_time: '14:02', end_time: '14:08' },
		{ name: 'Period 6',							start_time: '14:08', end_time: '15:06' }
	]
},
{
	name: "Regular Day HS",
	dow: [2,3,4,5,6,0],
	type: "HS",
	periods: [
		{ name: 'Period 0 (Optional)',	start_time: '6:44',  end_time: '7:54' },
		{ name: 'Passing to Period 1',	start_time: '7:54',  end_time: '8:00' },
		{ name: 'Period 1',							start_time: '8:00',  end_time: '8:58' },
		{ name: 'Passing to Period 2',	start_time: '8:58',  end_time: '9:04' },
		{ name: 'Period 2',							start_time: '9:04',  end_time: '10:10' },
		{ name: 'Snack',								start_time: '10:10', end_time: '10:19' },
		{ name: 'Passing to Period 3',	start_time: '10:19', end_time: '10:25' },
		{ name: 'Period 3',							start_time: '10:25', end_time: '11:23' },
		{ name: 'Passing (9-12)',				start_time: '11:23', end_time: '11:29' },
		{ name: 'Period 4 (9-12)',			start_time: '11:29', end_time: '12:27' },
		{ name: 'Lunch (9-12)',					start_time: '12:27', end_time: '12:58' },
		{ name: 'Passing to Period 5',	start_time: '12:58', end_time: '13:04' },
		{ name: 'Period 5',							start_time: '13:04',  end_time: '14:02' },
		{ name: 'Passing to Period 6',	start_time: '14:02',  end_time: '14:08' },
		{ name: 'Period 6',							start_time: '14:08',  end_time: '15:06' }
	]
},

{
	name: "Shortened Day MS",
	dow: [1],
	type: "MS",
	periods: [
		{ name: 'Passing to Period 1', 	start_time: '9:24',  end_time: '9:30' },
		{ name: 'Period 1', 						start_time: '9:30',  end_time: '10:14' },
		{ name: 'Passing to Period 2', 	start_time: '10:14', end_time: '10:20' },
		{ name: 'Period 2', 						start_time: '10:20', end_time: '11:07' },
		{ name: 'Snack', 								start_time: '11:07', end_time: '11:16' },
		{ name: 'Passing to Period 3', 	start_time: '11:16', end_time: '11:22' },
		{ name: 'Period 3', 						start_time: '11:22', end_time: '12:06' },
		{ name: 'Lunch (7-8)',					start_time: '12:06', end_time: '12:37' },
		{ name: 'Passing (7-8)',				start_time: '12:37', end_time: '12:43' },
		{ name: 'Period 4 (7-8)',				start_time: '12:43', end_time: '13:27' },
		{ name: 'Passing to Period 5',	start_time: '13:27',  end_time: '13:33' },
		{ name: 'Period 5',							start_time: '13:33',  end_time: '14:17' },
		{ name: 'Passing to Period 6',	start_time: '14:17',  end_time: '14:23' },
		{ name: 'Period 6',							start_time: '14:23',  end_time: '15:06' }
	]
},
{
	name: "Shortened Day HS",
	dow: [1],
	type: "HS",
	periods: [
		{ name: 'Passing to Period 1', 	start_time: '9:24',  end_time: '9:30' },
		{ name: 'Period 1', 						start_time: '9:30',  end_time: '10:14' },
		{ name: 'Passing to Period 2', 	start_time: '10:14', end_time: '10:20' },
		{ name: 'Period 2', 						start_time: '10:20', end_time: '11:07' },
		{ name: 'Snack', 								start_time: '11:07', end_time: '11:16' },
		{ name: 'Passing to Period 3', 	start_time: '11:16', end_time: '11:22' },
		{ name: 'Period 3', 						start_time: '11:22', end_time: '12:06' },
		{ name: 'Passing (9-12)', 			start_time: '12:06', end_time: '12:12' },
		{ name: 'Period 4 (9-12)', 			start_time: '12:12', end_time: '12:56' },
		{ name: 'Lunch (9-12)', 				start_time: '12:56', end_time: '13:27' },
		{ name: 'Passing to Period 5',	start_time: '13:27',  end_time: '13:33' },
		{ name: 'Period 5',							start_time: '13:33',  end_time: '14:17' },
		{ name: 'Passing to Period 6',	start_time: '14:17',  end_time: '14:23' },
		{ name: 'Period 6',							start_time: '14:23',  end_time: '15:06' }
	]
},
{
	name: "Finals",
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
		{ name: 'Period 0 (Optional)', 		start_time: '6:44',  end_time: '7:54' },
		{ name: 'Passing to Period 1', 		start_time: '7:54',  end_time: '8:00' },
		{ name: 'Period 1', 							start_time: '8:00',  end_time: '8:41' },
		{ name: 'Passing to Period 2', 		start_time: '8:41',  end_time: '8:47' },
		{ name: 'Period 2', 							start_time: '8:47',  end_time: '9:29' },
		{ name: 'Passing to Period 3', 		start_time: '9:29',  end_time: '9:35' },
		{ name: 'Period 3', 							start_time: '9:35',  end_time: '10:16' },
		{ name: 'Snack', 									start_time: '10:16', end_time: '10:24' },
		{ name: 'Passing to Period 4', 		start_time: '10:24', end_time: '10:30' },
		{ name: 'Period 4', 							start_time: '10:31', end_time: '11:12' },
		{ name: 'Passing to Period 5', 		start_time: '11:12', end_time: '11:18' },
		{ name: 'Period 5', 							start_time: '11:18', end_time: '11:59' },
		{ name: 'Passing to Period 6', 		start_time: '11:59', end_time: '12:05' },
		{ name: 'Period 6', 							start_time: '12:05', end_time: '12:46' }	
	]
},
{
	// WTF?
	name: "RallyA",
	dow: [],
	type: "",
	periods: [
		{ name: 'Passing to Period 1', 		start_time: '7:54',  end_time: '8:00' },
		{ name: 'Period 1', 							start_time: '8:00',  end_time: '8:46' },
		{ name: 'Passing to Period 2', 		start_time: '8:46',  end_time: '8:52' },
		{ name: 'Period 2', 							start_time: '8:52',  end_time: '9:42' },
		{ name: 'Snack', 									start_time: '9:42',  end_time: '9:52' },
		{ name: 'Passing to Period 3', 		start_time: '9:52',  end_time: '9:58' },
		{ name: 'Period 3', 							start_time: '9:58',  end_time: '10:44' },
		{ name: 'Passing to Period 4', 		start_time: '10:44', end_time: '10:50' },

		{ name: '4A Rally', 							start_time: '10:50', end_time: '11:43' },
		{ name: 'Period 4', 							start_time: '11:43', end_time: '12:42' },
		{ name: 'Lunch', 									start_time: '12:42', end_time: '1:22' },

		{ name: 'Passing to Period 5', 		start_time: '13:22', end_time: '13:28' },
		{ name: 'Period 5', 							start_time: '13:28', end_time: '14:14' },
		{ name: 'Passing to Period 6', 		start_time: '14:14', end_time: '14:20' },
		{ name: 'Period 6', 							start_time: '14:20', end_time: '15:06' }	
	]
},
{
	// WTF?
	name: "RallyB",
	dow: [],
	type: "",
	periods: [
		{ name: 'Passing to Period 1', 		start_time: '7:54',  end_time: '8:00' },
		{ name: 'Period 1', 							start_time: '8:00',  end_time: '8:46' },
		{ name: 'Passing to Period 2', 		start_time: '8:46',  end_time: '8:52' },
		{ name: 'Period 2', 							start_time: '8:52',  end_time: '9:42' },
		{ name: 'Snack', 									start_time: '9:42',  end_time: '9:52' },
		{ name: 'Passing to Period 3', 		start_time: '9:52',  end_time: '9:58' },
		{ name: 'Period 3', 							start_time: '9:58',  end_time: '10:44' },
		{ name: 'Passing to Period 4', 		start_time: '10:44', end_time: '10:50' },
		{ name: '4A Rally', 							start_time: '10:50', end_time: '11:43' },
		{ name: 'Period 4', 							start_time: '11:43', end_time: '12:42' },
		{ name: 'Lunch', 									start_time: '12:42', end_time: '1:22' },
		{ name: 'Passing to Period 5', 		start_time: '13:22', end_time: '13:28' },
		{ name: 'Period 5', 							start_time: '13:28', end_time: '14:14' },
		{ name: 'Passing to Period 6', 		start_time: '14:14', end_time: '14:20' },
		{ name: 'Period 6', 							start_time: '14:20', end_time: '15:06' }	
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
	name: "Test",
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