import Vue from 'vue'
import Router from 'vue-router'
import { HOST } from '@/const'
import login from '../containers/login/login'
import roleHome from '../containers/role-sale/home/home'
//拜访记录
import visitRecord from '../containers/role-sale/visit-record/visit-record'
import visitPlan from '../containers/role-sale/visit-plan/visit-plan'
import customsDetail from '../containers/role-sale/visit-record/customs-detail/customs-detail'
import potentialClients from '../containers/role-sale/potential-clients/potential-clients'

import dealCustomer from '../containers/role-sale/deal-customer/deal-customer'
//个人模块
import personal from '../containers/role-sale/personal/personal'
import clientRefund from '../containers/role-sale/personal/client-refund/client-refund'
import monthlyRefund from '../containers/role-sale/personal/monthly-refund/monthly-refund'
import detailRefund from '../containers/role-sale/personal/detail-refund/detail-refund'

Vue.use(Router);

export default new Router({
  mode:"history",
	routes: [
	  {
			path: ` ${HOST}/login`,
			name: "login",
			component: login,
		},
		{
			path: `${HOST}/sale`,
			name: "roleHome",
			component: roleHome,
			children: [
			  {
					path: `${HOST}/sale/dealCustomer`,
					name: "deal-customer",
					component: dealCustomer
				},
				{
					path: `${HOST}/sale/visitRecord`,
					name: "visitRecord",
					component: visitRecord,
				},

				{
					path: `${HOST}/sale/visitPlan`,
					name: "visitPlan",
					component: visitPlan,
				},
				{
					path: `${HOST}/sale/potentialClients`,
					name: "potentialClients",
					component: potentialClients,
				},
				{
					path: `${HOST}/sale/personal`,
					name: "personal",
					component: personal
				},
			]
		},
    {
      path: `${HOST}/sale/visitRecord/customsDetail/:id`,
      name: "customsDetail",
      component: customsDetail,
    },
    {
      path: `${HOST}/sale/personal/clientRefund`,
      name: "clientRefund",
      component: clientRefund
    },
    {
      path: `${HOST}/sale/personal/monthlyRefund`,
      name: "monthlyRefund",
      component: monthlyRefund
    },
    {
      path: `${HOST}/sale/personal/detailRefund`,
      name: "detailRefund",
      component: detailRefund
    },

  ]
})
