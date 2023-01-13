const updateMeta = (title, desc) => {
  document.title = `T-Rocket - ${title}`;
  document.querySelector('meta[name="description"]').content = desc;
};

export default updateMeta;
