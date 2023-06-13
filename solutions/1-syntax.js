// BEGIN (write your solution here)
export function getWeekends(format = 'long') {
    if (format === 'short') {
        return ['sat', 'sun'];
    } else {
        return ['saturday', 'sunday'];
    }
} 
// END
