/*
DESCRIPTION:

Given a string made up of letters a, b, and/or c, switch the position of letters a and b 
(change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

// My solution:

const switcheroo = x =>
x.replace(/[ab]/g, i => i === "a" ? i = "b" : i ="a");