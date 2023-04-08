export const formSubmitHandler = (e, nav, path) => {
   e.preventDefault();
   e.target.reset();
   document.getElementById('animate')?.classList.add('unmount')
   setTimeout(() => {
      nav(`/${path}`);
   }, 1000 );
};

export const disableBtnHandler = (e) => {
   e.preventDefault();
   alert('Text field cannot be empty, please input a non-empty value or valid character');
};
