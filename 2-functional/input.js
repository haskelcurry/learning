export const input = (events) => {
  document.addEventListener('click', e => {
    const el = e.target;
    Object
      .entries(events.click)
      .find(([selector]) => el.matches(selector))?.[1](el.id);
  });
};
