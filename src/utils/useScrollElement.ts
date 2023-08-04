const isCurrentSection = (id: string) => {
  let isScrolled: boolean = false;

  if (typeof document !== "undefined") {
    console.log("a");
  }

  /*
    window.addEventListener("scroll", function () {
      const scrollPos = window.scrollY;
  
      const sectionHeight: number = el.offsetHeight;
      const sectionTop: number = el.scrollTop;
  
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        isScrolled = true;
      } else {
        isScrolled = false;
      }
    });
  
    */

  return isScrolled;
};

export default isCurrentSection;
