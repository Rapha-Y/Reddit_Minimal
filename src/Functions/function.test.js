import { shortenNumber, getTimeDiff } from './functions';

//shortenNumber tests
test('expect 5 to yield 5', () => {
    expect(shortenNumber(5)).toBe('5');
});

test('expect 5000 to yield 5k', () => {
    expect(shortenNumber(5000)).toBe('5k');
});

test('expect 5000000 to yield 5m', () => {
    expect(shortenNumber(5000000)).toBe('5m');
});

test('expect 5000000000 to yield ???', () => {
    expect(shortenNumber(5000000000)).toBe('???');
});

test('expect -5 to yield -5', () => {
    expect(shortenNumber(-5)).toBe('-5');
});

test('expect -5000 to yield -5k', () => {
    expect(shortenNumber(-5000)).toBe('-5k');
});

test('expect -5000000 to yield -5m', () => {
    expect(shortenNumber(-5000000)).toBe('-5m');
});

test('expect -5000000000 to yield ???', () => {
    expect(shortenNumber(-5000000000)).toBe('???');
});

//getTimeDiff tests
test('expect to yield 10 years difference', () => {
    const oldDate = new Date('2010-01-01T00:00:00');
    const newDate = new Date('2020-01-01T00:00:00');
    expect(getTimeDiff(newDate, oldDate)).toBe('10 years ago');
});

test('expect to yield 10 months difference', () => {
    const oldDate = new Date('2010-01-01T00:00:00');
    const newDate = new Date('2010-11-01T00:00:00');
    expect(getTimeDiff(newDate, oldDate)).toBe('10 months ago');
});

test('expect to yield 10 days difference', () => {
    const oldDate = new Date('2010-01-01T00:00:00');
    const newDate = new Date('2010-01-11T00:00:00');
    expect(getTimeDiff(newDate, oldDate)).toBe('10 days ago');
});

test('expect to yield 10 hours difference', () => {
    const oldDate = new Date('2010-01-01T00:00:00');
    const newDate = new Date('2010-01-01T10:00:00');
    expect(getTimeDiff(newDate, oldDate)).toBe('10 hours ago');
});

test('expect to yield 10 minutes difference', () => {
    const oldDate = new Date('2010-01-01T00:00:00');
    const newDate = new Date('2010-01-01T00:10:00');
    expect(getTimeDiff(newDate, oldDate)).toBe('10 minutes ago');
});

test('expect to yield just now', () => {
    const oldDate = new Date('2010-01-01T00:00:00');
    const newDate = new Date('2010-01-01T00:00:10');
    expect(getTimeDiff(newDate, oldDate)).toBe('just now');
});
