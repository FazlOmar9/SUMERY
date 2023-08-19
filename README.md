# SUMERY
## Text Summarization Web App

Summarization Model Credit - Hugging Face Facebook Bart-Large-CNN

This is a simple front end web app. It uses a text summarization model from HuggingFace, specifically the Facebook Bart-Large-CNN, which is the most popular model for the task. It uses hugging face hosted inference API to connect to the model via JavaScript. It has a minimalistic and modern looking design.

## From the creator:
Hi! I'm Fazl Omar and I'm a machine learning enthusiast with some web dev knowledge. Recently, when I was learning about what HuggingFace is and how I can use pipelines, tokenizers, configs to fine tune models available on the platform in python via a process called transfer learning, it struck to me that I can make a text summarization web app and so this became my mini weekend-project. Look forward to making many such applications and once again a big thanks to HuggingFace for being such an awesome community!

### Version 1.0.0:
Current version has fixed length parameters specified in the promise. Clicking on summarize makes a loading spinner until await promise if fulfilled.

### Version 1.0.1:
Removed bug where previously generated text stays on output box when summarized the next time.