// Each sequence object has .next() and .current() methods
// .next() returns Boolean indicates if there are remaining elements in the sequence and moves forward when there is
// .current() returns current element of the sequence

function ArraySeq(arr){
  this.seq = arr;
  this.pos = -1;
}
ArraySeq.prototype.next = function(){
  if(this.pos >= this.seq.length - 1){
    return false;
  }
  this.pos++;
  return true;
}
ArraySeq.prototype.current = function(){
  return this.seq[this.pos];
}

function RangeSeq(from, to){
  this.pos = from - 1;
  this.to = to;
}
RangeSeq.prototype.next = function(){
  if(this.pos > this.to){
    return false;
  }
  this.pos++;
  return true;
}
RangeSeq.prototype.current = function(){
  return this.pos;
}

// logFive() logs first five elements or less of the given sequence object

function logFive(seq){
  for(let i = 0; i < 5; i++){
    if(!seq.next()){
      break;
    }
    console.log(seq.current());
  }
}
