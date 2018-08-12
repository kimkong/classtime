# Class Time Minder

A simple one page application to help manage time in a scheduled environment where the schedule changes often. There are default schedules, and schedules that can be easily overriden. The current implementation is not very flexible but does the job. Future improvements will be to include more settings and implement using node.js or other framework.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Prerequisites

You must have a javascript enabled browser and a speaker for the audio cues to be heard on the right countdown timer.


### Installing

No installation. Just copy the two files into the same directory and load the index.html file in your browser.

The schedule_data.js file assumes that the hash with dow assigned are the default schedules and will look to run the schedule on those days. There is no error checking here so if you have more than one schedule that needs to be run on the same day, it will only run the first one found if at all.

DOW is 0 indexed to Sunday.

The following is a single schedule default run Tues-Fri. MS will run if the schedule_type is set to "MS" and HS if set to "HS".

{
	name: "Regular Day MS",
	dow: [2,3,4,5],
	type: "MS",
	periods: [
		{ name: 'Period 0 (Optional)',	start_time: '6:44', end_time: '7:54' },
		{ name: 'Passing to Period 1',	start_time: '7:54', end_time: '8:00' },
		{ name: 'Period 1',							start_time: '8:00', end_time: '8:58' },
		{ name: 'Passing to Period 2',	start_time: '8:58', end_time: '9:04' },
		{ name: 'Period 2',							start_time: '9:04', end_time: '10:10' },
	]
},
{
	name: "Regular Day HS",
	dow: [2,3,4,5],
	type: "HS",
	periods: [
		{ name: 'Period 0 (Optional)',	start_time: '6:44',  end_time: '7:54' },
		{ name: 'Passing to Period 1',	start_time: '7:54',  end_time: '8:00' },
		{ name: 'Period 1',							start_time: '8:00',  end_time: '8:58' },
		{ name: 'Passing to Period 2',	start_time: '8:58',  end_time: '9:04' },
		{ name: 'Period 2',							start_time: '9:04',  end_time: '10:10' },
	]
},

## Running the tests

There are no tests for this. It was written ad-hoc and there are known edge cases that are not taken into consideration. For example, before and after the schedule time start and stop.


## Deployment

Add additional notes about how to deploy this on a live system


## Contributing


## Versioning


## Authors

Kenny Kim


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


## Acknowledgments

google is my friend.
