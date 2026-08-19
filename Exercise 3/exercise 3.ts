function fullName(first: string, last: string): string {
  return first + " " + last;
}

console.log(fullName("Mukhtar", "Ali"));

function registerUser(username: string, isAdmin?: boolean, language: string = "en"): void {
  console.log({ username, isAdmin, language });
}

registerUser("mukhtarali");
registerUser("mukhtarali", true);
registerUser("mukhtarali", false, "som");

function average(...scores: number[]): number {
  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}

console.log(average(80, 90, 100));
console.log(average(70, 85, 95, 60, 100));
