$(document).ready(function() {
  const $allArticle = $('#all_article');
  const $speakerArticle = $('#speaker_article');
  const $eventIntro = $('#event_intro');
  const $allSection = $('#all_section');
  const $eventSection = $('#event_section');
  const $speakerSection = $('#speaker_section');
  $allArticle.click(function() {
    $allArticle.addClass('tab_selected');
    $speakerArticle.removeClass('tab_selected');
    $eventIntro.removeClass('tab_selected');
    $allSection.removeClass('hidden');
    $eventSection.addClass('hidden');
    $speakerSection.addClass('hidden');
  });
  $speakerArticle.click(function() {
    $allArticle.removeClass('tab_selected');
    $speakerArticle.addClass('tab_selected');
    $eventIntro.removeClass('tab_selected');
    $allSection.addClass('hidden');
    $eventSection.addClass('hidden');
    $speakerSection.removeClass('hidden');
  });
  $eventIntro.click(function () {
    $allArticle.removeClass('tab_selected');
    $speakerArticle.removeClass('tab_selected');
    $eventIntro.addClass('tab_selected');
    $allSection.addClass('hidden');
    $eventSection.removeClass('hidden');
    $speakerSection.addClass('hidden');
  });
});