(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{260:function(t,e,a){"use strict";a.r(e);var o=a(0),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"introduction-to-backup-and-restore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-backup-and-restore","aria-hidden":"true"}},[t._v("#")]),t._v(" Introduction to backup and restore")]),t._v(" "),a("p",[a("code",[t._v("etcd")]),t._v(" is the key-value store for OpenShift Container Platform, which persists the state of all resource objects.\nIt is highly recommended that you back up your cluster’s etcd data regularly and store in a secure location, ideally\noutside the OpenShift Container Platform environment. Do not take an etcd backup before the first certificate rotation\ncompletes, which occurs 24 hours after installation, otherwise the backup will contain expired certificates. After the\ninitial certificate rotation, rotation occurs about every 15 days or so thereafter and the certificates that are being\nrotated have an expiration of approximately 30 days. So it is recommended that you backup etcd every 2.5 weeks.")]),t._v(" "),a("p",[t._v("It is also recommended to take etcd backups during non-peak usage hours, as it is a blocking action.")])])}),[],!1,null,null,null);e.default=r.exports}}]);