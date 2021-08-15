async function newFormHandler(event) {
  event.preventDefault();

  const car_maker = document.querySelector('input[name="car_maker"]').value;
  const car_model = document.querySelector('input[name="car_maker"]').value;
  const car_body = document.querySelector('input[name="car_maker"]').value;
  const car_img = document.querySelector('input[name="car_img"]').value;
  const review = document.querySelector('input[name="car_review"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      car_maker,
      car_model,
      car_body,
      car_img,
      review,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);
