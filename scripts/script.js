document.addEventListener('DOMContentLoaded', function () {
  var followButton = document.getElementById('followButton');

  followButton.addEventListener('click', function () {
    followButton.classList.toggle('unfollowed');
    followButton.innerHTML = followButton.classList.contains('unfollowed') ? 'Unfollow' : 'Follow';

});
}
);
