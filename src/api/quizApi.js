export const getQuizData = async () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=15`,
      requestOptions
    );
    if (response.ok) return response;
  } catch (e) {
    console.error(e);
  }
};
