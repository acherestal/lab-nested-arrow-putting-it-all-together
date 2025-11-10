function createLoginTracker (userInfo){
  let attemptCount = 0;

  const loginAttempts = (passwordAtteempt) => {
    attemptCount++;
    if(attemptCount > 3){
      return 'Account locked due to too many failed login attempts';
    }
    else if(passwordAtteempt !== userInfo.password){
      return `Attempt ${attemptCount}: Login failed`;
    }
    else{return 'Login successful'};

  }


  return loginAttempts;
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};