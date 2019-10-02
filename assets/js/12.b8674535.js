(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{240:function(t,e,a){"use strict";a.r(e);var l=a(0),s=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"backup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup","aria-hidden":"true"}},[t._v("#")]),t._v(" Backup")]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("The following variables are used to configure your backup:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("backup_directory")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The directory on the Ansible box where all the backed up files are stored. The directory will be created if it does not exist.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("backup_artifacts")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("A list of files or directories on the Ansible controller you wish to include in the etcd snapshots.  File paths are relative to the location of the playbook.")])])])]),t._v(" "),a("p",[t._v("In the example below, the contents of the "),a("code",[t._v("install_dir")]),t._v(" directory are backed up, as well as the contents of the "),a("code",[t._v("group_vars")]),t._v(" folder and the Ansible inventory file hosts.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('backup_directory: "{{ local_home }}/backups"\nbackup_artifacts:\n- "{{ install_dir }}"\n- ./group_vars/\n- ./hosts\n')])])]),a("p",[t._v("To perform the backup, run the playbook "),a("code",[t._v("backup_etcd.yml")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cd ~/Openshift-on-SimpliVity\n$ ansible-playbook -i hosts backup_etcd.yml\n")])])]),a("p",[t._v("Based on the configuration above, the backed  up files will be available in the "),a("code",[t._v("~/backups/")]),t._v(" folder:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ ls ~/backups/\n\nbackup_2019_09_19_155338.misc.tgz  \nbackup_2019_09_19_155338.snapshots.tgz\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);