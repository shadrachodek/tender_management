# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "tender_management"
app_title = "Tender Management"
app_publisher = "Minyx360"
app_description = "App to manage tender file"
app_icon = "octicon octicon-book"
app_color = "#9D0B0E"
app_email = "hello@minyx360.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/tender_management/css/tender_management.css"
# app_include_js = "/assets/tender_management/js/tender_management.js"

# include js, css files in header of web template
# web_include_css = "/assets/tender_management/css/tender_management.css"
# web_include_js = "/assets/tender_management/js/tender_management.js"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "tender_management.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "tender_management.install.before_install"
# after_install = "tender_management.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "tender_management.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

#doc_events = {
#  "Contracts": {
#    "validate": "tender_management.tender_management.doctype.contracts.contracts.get_payment_balance",
#  }
#}

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"tender_management.tasks.all"
# 	],
# 	"daily": [
# 		"tender_management.tasks.daily"
# 	],
# 	"hourly": [
# 		"tender_management.tasks.hourly"
# 	],
# 	"weekly": [
# 		"tender_management.tasks.weekly"
# 	]
# 	"monthly": [
# 		"tender_management.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "tender_management.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "tender_management.event.get_events"
# }

