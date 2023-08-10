const category = document.getElementById("category");

new Chart(category, {
type: 'bar',
data: {
    labels: ['A.M', 'M.E', 'C.E', 'C.S', 'A.B', 'Arc'],
    datasets: [{
    label: 'Number of books',
    data: [15804, 10342, 13054, 20438, 8392, 12439],
    borderWidth: 1
    }]
},
option: {
    risponsive: true,
    plugins: {
        legend: {
            position: 'left'
        }
    }
}
});

const availability = document.getElementById("availability");

new Chart(availability, {
    type: 'doughnut',
    data: {
        labels: ['Available', 'Reserved'],
        datasets: [{
            label: 'Availability of books in percentage',
            data: [89, 11],
            borderWidth: 1
        }],
    },
    options: {
        risponsive: true,
    }
});

const borrowTrends = document.getElementById("borrow-trends")

new Chart(borrowTrends, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Book Checkout Trend',
            data: [2309, 4738, 4244, 6544, 12656, 2341, 1532, 5643, 7654, 14583],
            borderWidth: 1
        }]
    }
});