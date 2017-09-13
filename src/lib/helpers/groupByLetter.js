export default function groupByLetter(skills){
  let groupedSkills = {
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
    g: [],
    h: [],
    i: [],
    j: [],
    k: [],
    l: [],
    m: [],
    n: [],
    o: [],
    p: [],
    q: [],
    r: [],
    s: [],
    t: [],
    u: [],
    v: [],
    w: [],
    x: [],
    y: [],
    z: [],
    other: [],
  };
  for(let i=0; i<skills.length; i++){
    let firstLetter = skills[i].split('')[0];
    switch(firstLetter.toLowerCase()){
      case 'a':
        groupedSkills['a'].push(skills[i]);
        break;
      case 'b':
        groupedSkills['b'].push(skills[i]);
        break;
      case 'c':
        groupedSkills['c'].push(skills[i]);
        break;
      case 'd':
        groupedSkills['d'].push(skills[i]);
        break;
      case 'e':
        groupedSkills['e'].push(skills[i]);
        break;
      case 'f':
        groupedSkills['f'].push(skills[i]);
        break;
      case 'g':
        groupedSkills['g'].push(skills[i]);
        break;
      case 'h':
        groupedSkills['h'].push(skills[i]);
        break;
      case 'i':
        groupedSkills['i'].push(skills[i]);
        break;
      case 'j':
        groupedSkills['j'].push(skills[i]);
        break;
      case 'k':
        groupedSkills['k'].push(skills[i]);
        break;
      case 'l':
        groupedSkills['l'].push(skills[i]);
        break;
      case 'm':
        groupedSkills['m'].push(skills[i]);
        break;
      case 'n':
        groupedSkills['n'].push(skills[i]);
        break;
      case 'o':
        groupedSkills['o'].push(skills[i]);
        break;
      case 'p':
        groupedSkills['p'].push(skills[i]);
        break;
      case 'q':
        groupedSkills['q'].push(skills[i]);
        break;
      case 'r':
        groupedSkills['r'].push(skills[i]);
        break;
      case 's':
        groupedSkills['s'].push(skills[i]);
        break;
      case 't':
        groupedSkills['t'].push(skills[i]);
        break;
      case 'u':
        groupedSkills['u'].push(skills[i]);
        break;
      case 'v':
        groupedSkills['v'].push(skills[i]);
        break;
      case 'w':
        groupedSkills['w'].push(skills[i]);
        break;
      case 'x':
        groupedSkills['x'].push(skills[i]);
        break;
      case 'y':
        groupedSkills['y'].push(skills[i]);
        break;
      case 'z':
        groupedSkills['z'].push(skills[i]);
        break;
      default:
        groupedSkills['other'].push(skills[i]);
        break;
    }
  }
  return groupedSkills
}
