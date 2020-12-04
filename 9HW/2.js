let line = {
    x: [],
    y: [],
    type: 'scatter'
};
function calcY(x) {
    let y;
    y = x >= 1 ? 5 / x : (x * x - 4 * x);
    return y;
}
for (let i = -4.9; i < 5; i += 0.1) {
    line.x.push(i);
    line.y.push(calcY(i));
}
let data = [line];
let layout = {
    title: 'Задание 2',
    xaxis: {
        title: '1',
        showgrid: false,
        zeroline: false
    },
    yaxis: {
        title: '2',
        showline: false
    }
};

Plotly.newPlot('graph', data, layout);
