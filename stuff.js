const counterCreator = () => {
    let count = 0;
    return () => {
      console.log(count);
      count++;
    };
  };
  
  const counter = counterCreator();
  
  counter(); // 0
  counter(); // 1
  counter(); // 2
  counter(); // 3