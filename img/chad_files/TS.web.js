(function(){"use strict";TS.registerModule("web",{login_sig:new signals.Signal,ds_login_sig:new signals.Signal,onStart:function(){TS.prefs.messages_theme_changed_sig.add(TS.ui.setThemeClasses,TS);TS.web.autoToggleSection();$('[data-toggle="tooltip"]').tooltip({animation:true});$("body").bind("mousewheel.ignore_while_monkeyscrolling",function(e){var oe=e.originalEvent;if(!oe)return;var $ms=$(e.target).closest(".monkey_scroller");if(!$ms.length)return;var dy=oe.wheelDeltaY;if(dy===null&&oe.detail&&oe.axis==oe.VERTICAL_AXIS){dy=oe.detail}else if(dy===null){dy=oe.wheelDelta}if(!dy)return;if($ms[0].scrollTop===$ms[0].scrollHeight-$ms.height()&&dy<0||$ms[0].scrollTop===0&&dy>0){e.preventDefault()}});if(TS.timing&&TS.boot_data&&TS.boot_data.page_timing_label){TS.timing.measure(TS.boot_data.page_timing_label+"_load","start_nav")}},gogogo:function(){TSConnLogger.log("gogogo","TS.web.gogogo");$("html").bind("mousedown",function(){TS.model.ui.is_mouse_down=true});$("html").bind("dragend",function(){TS.model.ui.is_mouse_down=false});$("html").bind("mouseup",function(){TS.model.ui.is_mouse_down=false})},onMsgsDivClick:function(e){var $el=$(e.target);var msg_id=$el.closest(".message").data("ts");if(msg_id){msg_id=msg_id.toString()}if($el.hasClass("member")){if($el.data("member-id")){}else{TS.warn("hmmm, no data-member-id?")}}if($el.hasClass("internal_member_link")){}if($el.hasClass("internal_bot_link")){}if($el.hasClass("internal_channel_link")){}if($el.hasClass("msg_select_cb")){TS.msg_edit.batchDeleteSelectionChanged($el,e.shiftKey)}var $file_actions_el=$el.closest(".file_actions");if($file_actions_el.length==1){TS.info("click on .file_actions");e.preventDefault();TS.menu.startWithFileActions(e,$file_actions_el.data("file-id"));return}TS.stars.checkForStarClick(e);TS.rxns.checkForRxnClick(e);TS.inline_imgs.checkForInlineImgClick(e);TS.inline_videos.checkForInlineVideoClick(e);TS.inline_audios.checkForInlineAudioClick(e);TS.inline_others.checkForInlineOtherClick(e);TS.inline_attachments.checkForInlineAttachmentClick(e);TS.inline_file_previews.checkForInlineFilePreviewClick(e)},toggleSection:function(section,no_add_hash){var $section=$("#"+section);var border=$section.css("border-bottom");$section.css("border-bottom","1px solid transparent");$section.find(".accordion_subsection").slideToggle(100,function(){$section.css("border-bottom",border);if($section.hasClass("plastic_row")&&!$section.hasClass("open")){$section.removeAttr("style")}});$section.toggleClass("open");$section.find("textarea").trigger("autosize-resize");var expand_btn=$section.find(".accordion_expand");if(expand_btn.text()=="expand"){expand_btn.text("close");$section.find(".ladda-button").each(function(){Ladda.bind($(this)[0])})}else{expand_btn.text("expand")}if(!no_add_hash){history.pushState(null,null,"#"+section.replace("change_",""))}},openSection:function(section){var $section=$("#"+section);if(!$section.hasClass("open"))TS.web.toggleSection(section)},closeSection:function(section){var $section=$("#"+section);if($section.hasClass("open"))TS.web.toggleSection(section)},autoToggleSection:function(){var hash=TS.utility.htmlEntities(window.location.hash);if(hash){if(hash.charAt(0)==="#"){hash=hash.substring(1)}var anchor=$('a[name="'+hash+'"][data-accordion]');var section=anchor.data("accordion");if(section){TS.web.toggleSection(section)}}},scrollToElWithHeaderOffset:function(selector){var $el=$(selector);$el.scrollintoview({px_offset:$("header").height()+16})},onFirstLoginMS:function(data){$("body").addClass("no_attachment_max_width");_emojiReplaceOnLoad();TSConnLogger.log("first_rtm_start","TS.web logged in first time");TS.warn(new Date-TSConnLogger.start_time+"ms from first html to login_sig.dispatch()");TS.web.login_sig.dispatch()},onEveryLoginMS:function(data){},apiPausedChanged:function(pause_count,secs){}});var _emojiReplaceOnLoad=function(){$(".emoji_replace_on_load").each(function(){var html=$(this).html();html=TS.emoji.graphicReplace(html);$(this).html(html)})}})();
