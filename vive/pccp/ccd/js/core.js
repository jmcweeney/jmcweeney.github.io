var gStringCollapse = "Collapse"; var gStringExpand = "Expand";
      function expandAllSections() {
          var toggleButtons = document.getElementsByClassName("expandCollapse");
          if (toggleButtons != null) {
              var i = 0;
              while (i != toggleButtons.length) {
                  expandSection(toggleButtons[i]);
                  i++;
              }
          }
          toggle('sectionsToggleExpand');
          toggle('sectionsToggleCollapse');
      }
      function expandSection(sectionTitleButton) {
          sectionTitleButton.title = gStringCollapse;
          sectionTitleButton.innerText = '▼';
          sectionTitleButton.onclick = function (){collapseSection(this);};
          var sectionContent = sectionTitleButton.parentElement.parentElement.children[1]
          if (sectionContent != null) {
              sectionContent.style.display = '';
          }
      }
      function collapseAllSections() {
          var toggleButtons = document.getElementsByClassName("expandCollapse");
          if (toggleButtons != null) {
              var i = 0;
              while (i != toggleButtons.length) {
                  collapseSection(toggleButtons[i]);
                  i++;
              }
          }
          toggle('sectionsToggleExpand');
          toggle('sectionsToggleCollapse');
      }
      function collapseSection(sectionTitleButton) {
          sectionTitleButton.title = gStringExpand;
          sectionTitleButton.innerText = '▶';
          sectionTitleButton.onclick = function (){expandSection(this);};
          var sectionContent = sectionTitleButton.parentElement.parentElement.children[1]
          if (sectionContent != null) {
              sectionContent.style.display = 'none';
          }
      }
      function showReviewMarks() {
          var allHTMLTags=document.getElementsByTagName("*");
          for (i in allHTMLTags) {
              //Get all tags with the specified class name.
              if (allHTMLTags[i].className=='revision_insert_final') {
                  allHTMLTags[i].className = 'revision_insert';
              }
              if (allHTMLTags[i].className=='revision_delete_final') {
                  allHTMLTags[i].className = 'revision_delete';
              }
          }
          toggle('revisionToggleOn');
          toggle('revisionToggleOff');
      }
      function hideReviewMarks() {
          var allHTMLTags=document.getElementsByTagName("*");
          for (i in allHTMLTags) {
              //Get all tags with the specified class name.
              if (allHTMLTags[i].className=='revision_insert') {
                  allHTMLTags[i].className = 'revision_insert_final';
              }
              if (allHTMLTags[i].className=='revision_delete') {
                  allHTMLTags[i].className = 'revision_delete_final';
              }
          }
          toggle('revisionToggleOn');
          toggle('revisionToggleOff');
      }
      function toggle(obj) {
          var el = document.getElementById(obj);
          el.style.display = (el.style.display != 'none' ? 'none' : '' );
      }
