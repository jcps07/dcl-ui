import { txClient, queryClient, MissingWalletError , registry} from './module'
// @ts-ignore
import { SpVuexError } from '@starport/vuex'

import { ApprovedCertificates } from "./module/types/pki/approved_certificates"
import { ApprovedCertificatesBySubject } from "./module/types/pki/approved_certificates_by_subject"
import { ApprovedCertificatesBySubjectKeyId } from "./module/types/pki/approved_certificates_by_subject_key_id"
import { ApprovedRootCertificates } from "./module/types/pki/approved_root_certificates"
import { Certificate } from "./module/types/pki/certificate"
import { CertificateIdentifier } from "./module/types/pki/certificate_identifier"
import { ChildCertificates } from "./module/types/pki/child_certificates"
import { Grant } from "./module/types/pki/grant"
import { NocIcaCertificates } from "./module/types/pki/noc_ica_certificates"
import { NocRootCertificates } from "./module/types/pki/noc_root_certificates"
import { NocRootCertificatesByVidAndSkid } from "./module/types/pki/noc_root_certificates_by_vid_and_skid"
import { PkiRevocationDistributionPoint } from "./module/types/pki/pki_revocation_distribution_point"
import { PkiRevocationDistributionPointsByIssuerSubjectKeyID } from "./module/types/pki/pki_revocation_distribution_points_by_issuer_subject_key_id"
import { ProposedCertificate } from "./module/types/pki/proposed_certificate"
import { ProposedCertificateRevocation } from "./module/types/pki/proposed_certificate_revocation"
import { RejectedCertificate } from "./module/types/pki/rejected_certificate"
import { RevokedCertificates } from "./module/types/pki/revoked_certificates"
import { RevokedNocRootCertificates } from "./module/types/pki/revoked_noc_root_certificates"
import { RevokedRootCertificates } from "./module/types/pki/revoked_root_certificates"
import { UniqueCertificate } from "./module/types/pki/unique_certificate"


export { ApprovedCertificates, ApprovedCertificatesBySubject, ApprovedCertificatesBySubjectKeyId, ApprovedRootCertificates, Certificate, CertificateIdentifier, ChildCertificates, Grant, NocIcaCertificates, NocRootCertificates, NocRootCertificatesByVidAndSkid, PkiRevocationDistributionPoint, PkiRevocationDistributionPointsByIssuerSubjectKeyID, ProposedCertificate, ProposedCertificateRevocation, RejectedCertificate, RevokedCertificates, RevokedNocRootCertificates, RevokedRootCertificates, UniqueCertificate };

async function initTxClient(vuexGetters) {
	return await txClient(vuexGetters['keplrSigner'] || vuexGetters['common/wallet/signer'], {
		addr: vuexGetters['common/env/apiTendermint']
	})
}

async function initQueryClient(vuexGetters) {
	return await queryClient({
		addr: vuexGetters['common/env/apiCosmos']
	})
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

function getStructure(template) {
	let structure = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field: any = {}
		field.name = key
		field.type = typeof value
		structure.fields.push(field)
	}
	return structure
}

const getDefaultState = () => {
	return {
				ApprovedCertificates: {},
				ApprovedCertificatesAll: {},
				ProposedCertificate: {},
				ProposedCertificateAll: {},
				ChildCertificates: {},
				ProposedCertificateRevocation: {},
				ProposedCertificateRevocationAll: {},
				RevokedCertificates: {},
				RevokedCertificatesAll: {},
				ApprovedRootCertificates: {},
				RevokedRootCertificates: {},
				ApprovedCertificatesBySubject: {},
				RejectedCertificate: {},
				RejectedCertificateAll: {},
				PkiRevocationDistributionPoint: {},
				PkiRevocationDistributionPointAll: {},
				PkiRevocationDistributionPointsByIssuerSubjectKeyID: {},
				NocRootCertificates: {},
				NocRootCertificatesByVidAndSkid: {},
				NocRootCertificatesAll: {},
				NocIcaCertificates: {},
				NocIcaCertificatesAll: {},
				RevokedNocRootCertificates: {},
				RevokedNocRootCertificatesAll: {},
				
				_Structure: {
						ApprovedCertificates: getStructure(ApprovedCertificates.fromPartial({})),
						ApprovedCertificatesBySubject: getStructure(ApprovedCertificatesBySubject.fromPartial({})),
						ApprovedCertificatesBySubjectKeyId: getStructure(ApprovedCertificatesBySubjectKeyId.fromPartial({})),
						ApprovedRootCertificates: getStructure(ApprovedRootCertificates.fromPartial({})),
						Certificate: getStructure(Certificate.fromPartial({})),
						CertificateIdentifier: getStructure(CertificateIdentifier.fromPartial({})),
						ChildCertificates: getStructure(ChildCertificates.fromPartial({})),
						Grant: getStructure(Grant.fromPartial({})),
						NocIcaCertificates: getStructure(NocIcaCertificates.fromPartial({})),
						NocRootCertificates: getStructure(NocRootCertificates.fromPartial({})),
						NocRootCertificatesByVidAndSkid: getStructure(NocRootCertificatesByVidAndSkid.fromPartial({})),
						PkiRevocationDistributionPoint: getStructure(PkiRevocationDistributionPoint.fromPartial({})),
						PkiRevocationDistributionPointsByIssuerSubjectKeyID: getStructure(PkiRevocationDistributionPointsByIssuerSubjectKeyID.fromPartial({})),
						ProposedCertificate: getStructure(ProposedCertificate.fromPartial({})),
						ProposedCertificateRevocation: getStructure(ProposedCertificateRevocation.fromPartial({})),
						RejectedCertificate: getStructure(RejectedCertificate.fromPartial({})),
						RevokedCertificates: getStructure(RevokedCertificates.fromPartial({})),
						RevokedNocRootCertificates: getStructure(RevokedNocRootCertificates.fromPartial({})),
						RevokedRootCertificates: getStructure(RevokedRootCertificates.fromPartial({})),
						UniqueCertificate: getStructure(UniqueCertificate.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getApprovedCertificates: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ApprovedCertificates[JSON.stringify(params)] ?? {}
		},
				getApprovedCertificatesAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ApprovedCertificatesAll[JSON.stringify(params)] ?? {}
		},
				getProposedCertificate: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ProposedCertificate[JSON.stringify(params)] ?? {}
		},
				getProposedCertificateAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ProposedCertificateAll[JSON.stringify(params)] ?? {}
		},
				getChildCertificates: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ChildCertificates[JSON.stringify(params)] ?? {}
		},
				getProposedCertificateRevocation: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ProposedCertificateRevocation[JSON.stringify(params)] ?? {}
		},
				getProposedCertificateRevocationAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ProposedCertificateRevocationAll[JSON.stringify(params)] ?? {}
		},
				getRevokedCertificates: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RevokedCertificates[JSON.stringify(params)] ?? {}
		},
				getRevokedCertificatesAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RevokedCertificatesAll[JSON.stringify(params)] ?? {}
		},
				getApprovedRootCertificates: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ApprovedRootCertificates[JSON.stringify(params)] ?? {}
		},
				getRevokedRootCertificates: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RevokedRootCertificates[JSON.stringify(params)] ?? {}
		},
				getApprovedCertificatesBySubject: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ApprovedCertificatesBySubject[JSON.stringify(params)] ?? {}
		},
				getRejectedCertificate: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RejectedCertificate[JSON.stringify(params)] ?? {}
		},
				getRejectedCertificateAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RejectedCertificateAll[JSON.stringify(params)] ?? {}
		},
				getPkiRevocationDistributionPoint: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PkiRevocationDistributionPoint[JSON.stringify(params)] ?? {}
		},
				getPkiRevocationDistributionPointAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PkiRevocationDistributionPointAll[JSON.stringify(params)] ?? {}
		},
				getPkiRevocationDistributionPointsByIssuerSubjectKeyID: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.PkiRevocationDistributionPointsByIssuerSubjectKeyID[JSON.stringify(params)] ?? {}
		},
				getNocRootCertificates: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.NocRootCertificates[JSON.stringify(params)] ?? {}
		},
				getNocRootCertificatesByVidAndSkid: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.NocRootCertificatesByVidAndSkid[JSON.stringify(params)] ?? {}
		},
				getNocRootCertificatesAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.NocRootCertificatesAll[JSON.stringify(params)] ?? {}
		},
				getNocIcaCertificates: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.NocIcaCertificates[JSON.stringify(params)] ?? {}
		},
				getNocIcaCertificatesAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.NocIcaCertificatesAll[JSON.stringify(params)] ?? {}
		},
				getRevokedNocRootCertificates: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RevokedNocRootCertificates[JSON.stringify(params)] ?? {}
		},
				getRevokedNocRootCertificatesAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RevokedNocRootCertificatesAll[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: zigbeealliance.distributedcomplianceledger.pki initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new SpVuexError('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryApprovedCertificates({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryApprovedCertificates( key.subject,  key.subjectKeyId)).data
				
					
				commit('QUERY', { query: 'ApprovedCertificates', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryApprovedCertificates', payload: { options: { all }, params: {...key},query }})
				return getters['getApprovedCertificates']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryApprovedCertificates', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryApprovedCertificatesAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryApprovedCertificatesAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryApprovedCertificatesAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ApprovedCertificatesAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryApprovedCertificatesAll', payload: { options: { all }, params: {...key},query }})
				return getters['getApprovedCertificatesAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryApprovedCertificatesAll', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryProposedCertificate({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryProposedCertificate( key.subject,  key.subjectKeyId)).data
				
					
				commit('QUERY', { query: 'ProposedCertificate', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProposedCertificate', payload: { options: { all }, params: {...key},query }})
				return getters['getProposedCertificate']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryProposedCertificate', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryProposedCertificateAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryProposedCertificateAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryProposedCertificateAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ProposedCertificateAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProposedCertificateAll', payload: { options: { all }, params: {...key},query }})
				return getters['getProposedCertificateAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryProposedCertificateAll', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryChildCertificates({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryChildCertificates( key.issuer,  key.authorityKeyId)).data
				
					
				commit('QUERY', { query: 'ChildCertificates', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryChildCertificates', payload: { options: { all }, params: {...key},query }})
				return getters['getChildCertificates']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryChildCertificates', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryProposedCertificateRevocation({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryProposedCertificateRevocation( key.subject,  key.subjectKeyId, query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryProposedCertificateRevocation( key.subject,  key.subjectKeyId, {...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ProposedCertificateRevocation', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProposedCertificateRevocation', payload: { options: { all }, params: {...key},query }})
				return getters['getProposedCertificateRevocation']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryProposedCertificateRevocation', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryProposedCertificateRevocationAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryProposedCertificateRevocationAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryProposedCertificateRevocationAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ProposedCertificateRevocationAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProposedCertificateRevocationAll', payload: { options: { all }, params: {...key},query }})
				return getters['getProposedCertificateRevocationAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryProposedCertificateRevocationAll', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryRevokedCertificates({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryRevokedCertificates( key.subject,  key.subjectKeyId)).data
				
					
				commit('QUERY', { query: 'RevokedCertificates', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRevokedCertificates', payload: { options: { all }, params: {...key},query }})
				return getters['getRevokedCertificates']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryRevokedCertificates', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryRevokedCertificatesAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryRevokedCertificatesAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryRevokedCertificatesAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'RevokedCertificatesAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRevokedCertificatesAll', payload: { options: { all }, params: {...key},query }})
				return getters['getRevokedCertificatesAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryRevokedCertificatesAll', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryApprovedRootCertificates({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryApprovedRootCertificates()).data
				
					
				commit('QUERY', { query: 'ApprovedRootCertificates', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryApprovedRootCertificates', payload: { options: { all }, params: {...key},query }})
				return getters['getApprovedRootCertificates']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryApprovedRootCertificates', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryRevokedRootCertificates({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryRevokedRootCertificates()).data
				
					
				commit('QUERY', { query: 'RevokedRootCertificates', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRevokedRootCertificates', payload: { options: { all }, params: {...key},query }})
				return getters['getRevokedRootCertificates']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryRevokedRootCertificates', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryApprovedCertificatesBySubject({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryApprovedCertificatesBySubject( key.subject)).data
				
					
				commit('QUERY', { query: 'ApprovedCertificatesBySubject', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryApprovedCertificatesBySubject', payload: { options: { all }, params: {...key},query }})
				return getters['getApprovedCertificatesBySubject']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryApprovedCertificatesBySubject', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryRejectedCertificate({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryRejectedCertificate( key.subject,  key.subjectKeyId)).data
				
					
				commit('QUERY', { query: 'RejectedCertificate', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRejectedCertificate', payload: { options: { all }, params: {...key},query }})
				return getters['getRejectedCertificate']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryRejectedCertificate', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryRejectedCertificateAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryRejectedCertificateAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryRejectedCertificateAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'RejectedCertificateAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRejectedCertificateAll', payload: { options: { all }, params: {...key},query }})
				return getters['getRejectedCertificateAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryRejectedCertificateAll', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryPkiRevocationDistributionPoint({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryPkiRevocationDistributionPoint( key.issuerSubjectKeyID,  key.vid,  key.label)).data
				
					
				commit('QUERY', { query: 'PkiRevocationDistributionPoint', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPkiRevocationDistributionPoint', payload: { options: { all }, params: {...key},query }})
				return getters['getPkiRevocationDistributionPoint']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryPkiRevocationDistributionPoint', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryPkiRevocationDistributionPointAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryPkiRevocationDistributionPointAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryPkiRevocationDistributionPointAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'PkiRevocationDistributionPointAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPkiRevocationDistributionPointAll', payload: { options: { all }, params: {...key},query }})
				return getters['getPkiRevocationDistributionPointAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryPkiRevocationDistributionPointAll', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryPkiRevocationDistributionPointsByIssuerSubjectKeyID({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryPkiRevocationDistributionPointsByIssuerSubjectKeyID( key.issuerSubjectKeyID)).data
				
					
				commit('QUERY', { query: 'PkiRevocationDistributionPointsByIssuerSubjectKeyID', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryPkiRevocationDistributionPointsByIssuerSubjectKeyID', payload: { options: { all }, params: {...key},query }})
				return getters['getPkiRevocationDistributionPointsByIssuerSubjectKeyID']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryPkiRevocationDistributionPointsByIssuerSubjectKeyID', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryNocRootCertificates({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryNocRootCertificates( key.vid)).data
				
					
				commit('QUERY', { query: 'NocRootCertificates', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryNocRootCertificates', payload: { options: { all }, params: {...key},query }})
				return getters['getNocRootCertificates']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryNocRootCertificates', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryNocRootCertificatesByVidAndSkid({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryNocRootCertificatesByVidAndSkid( key.vid,  key.subjectKeyId)).data
				
					
				commit('QUERY', { query: 'NocRootCertificatesByVidAndSkid', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryNocRootCertificatesByVidAndSkid', payload: { options: { all }, params: {...key},query }})
				return getters['getNocRootCertificatesByVidAndSkid']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryNocRootCertificatesByVidAndSkid', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryNocRootCertificatesAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryNocRootCertificatesAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryNocRootCertificatesAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'NocRootCertificatesAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryNocRootCertificatesAll', payload: { options: { all }, params: {...key},query }})
				return getters['getNocRootCertificatesAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryNocRootCertificatesAll', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryNocIcaCertificates({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryNocIcaCertificates( key.vid)).data
				
					
				commit('QUERY', { query: 'NocIcaCertificates', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryNocIcaCertificates', payload: { options: { all }, params: {...key},query }})
				return getters['getNocIcaCertificates']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryNocIcaCertificates', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryNocIcaCertificatesAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryNocIcaCertificatesAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryNocIcaCertificatesAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'NocIcaCertificatesAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryNocIcaCertificatesAll', payload: { options: { all }, params: {...key},query }})
				return getters['getNocIcaCertificatesAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryNocIcaCertificatesAll', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryRevokedNocRootCertificates({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryRevokedNocRootCertificates( key.subject,  key.subjectKeyId)).data
				
					
				commit('QUERY', { query: 'RevokedNocRootCertificates', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRevokedNocRootCertificates', payload: { options: { all }, params: {...key},query }})
				return getters['getRevokedNocRootCertificates']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryRevokedNocRootCertificates', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		
		
		 		
		
		
		async QueryRevokedNocRootCertificatesAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryRevokedNocRootCertificatesAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryRevokedNocRootCertificatesAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'RevokedNocRootCertificatesAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRevokedNocRootCertificatesAll', payload: { options: { all }, params: {...key},query }})
				return getters['getRevokedNocRootCertificatesAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryRevokedNocRootCertificatesAll', 'API Node Unavailable. Could not perform query: ' + e.message)

			}
		},
		
		
		async sendMsgUpdatePkiRevocationDistributionPoint({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdatePkiRevocationDistributionPoint(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgUpdatePkiRevocationDistributionPoint:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdatePkiRevocationDistributionPoint:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgAddNocX509RootCert({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAddNocX509RootCert(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgAddNocX509RootCert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgAddNocX509RootCert:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgApproveAddX509RootCert({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgApproveAddX509RootCert(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgApproveAddX509RootCert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgApproveAddX509RootCert:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRevokeNocX509IcaCert({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRevokeNocX509IcaCert(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgRevokeNocX509IcaCert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgRevokeNocX509IcaCert:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRevokeX509Cert({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRevokeX509Cert(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgRevokeX509Cert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgRevokeX509Cert:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgAssignVid({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAssignVid(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgAssignVid:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgAssignVid:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgAddPkiRevocationDistributionPoint({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAddPkiRevocationDistributionPoint(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgAddPkiRevocationDistributionPoint:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgAddPkiRevocationDistributionPoint:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgAddNocX509IcaCert({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAddNocX509IcaCert(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgAddNocX509IcaCert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgAddNocX509IcaCert:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRejectAddX509RootCert({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRejectAddX509RootCert(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgRejectAddX509RootCert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgRejectAddX509RootCert:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDeletePkiRevocationDistributionPoint({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeletePkiRevocationDistributionPoint(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgDeletePkiRevocationDistributionPoint:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeletePkiRevocationDistributionPoint:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgProposeAddX509RootCert({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgProposeAddX509RootCert(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgProposeAddX509RootCert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgProposeAddX509RootCert:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgProposeRevokeX509RootCert({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgProposeRevokeX509RootCert(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgProposeRevokeX509RootCert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgProposeRevokeX509RootCert:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgApproveRevokeX509RootCert({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgApproveRevokeX509RootCert(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgApproveRevokeX509RootCert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgApproveRevokeX509RootCert:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgAddX509Cert({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAddX509Cert(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgAddX509Cert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgAddX509Cert:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRevokeNocX509RootCert({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRevokeNocX509RootCert(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgRevokeNocX509RootCert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgRevokeNocX509RootCert:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRemoveX509Cert({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRemoveX509Cert(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgRemoveX509Cert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgRemoveX509Cert:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgUpdatePkiRevocationDistributionPoint({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdatePkiRevocationDistributionPoint(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgUpdatePkiRevocationDistributionPoint:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdatePkiRevocationDistributionPoint:Create', 'Could not create message: ' + e.message)
				}
			}
		},
		async MsgAddNocX509RootCert({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAddNocX509RootCert(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgAddNocX509RootCert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgAddNocX509RootCert:Create', 'Could not create message: ' + e.message)
				}
			}
		},
		async MsgApproveAddX509RootCert({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgApproveAddX509RootCert(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgApproveAddX509RootCert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgApproveAddX509RootCert:Create', 'Could not create message: ' + e.message)
				}
			}
		},
		async MsgRevokeNocX509IcaCert({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRevokeNocX509IcaCert(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgRevokeNocX509IcaCert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgRevokeNocX509IcaCert:Create', 'Could not create message: ' + e.message)
				}
			}
		},
		async MsgRevokeX509Cert({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRevokeX509Cert(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgRevokeX509Cert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgRevokeX509Cert:Create', 'Could not create message: ' + e.message)
				}
			}
		},
		async MsgAssignVid({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAssignVid(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgAssignVid:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgAssignVid:Create', 'Could not create message: ' + e.message)
				}
			}
		},
		async MsgAddPkiRevocationDistributionPoint({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAddPkiRevocationDistributionPoint(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgAddPkiRevocationDistributionPoint:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgAddPkiRevocationDistributionPoint:Create', 'Could not create message: ' + e.message)
				}
			}
		},
		async MsgAddNocX509IcaCert({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAddNocX509IcaCert(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgAddNocX509IcaCert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgAddNocX509IcaCert:Create', 'Could not create message: ' + e.message)
				}
			}
		},
		async MsgRejectAddX509RootCert({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRejectAddX509RootCert(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgRejectAddX509RootCert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgRejectAddX509RootCert:Create', 'Could not create message: ' + e.message)
				}
			}
		},
		async MsgDeletePkiRevocationDistributionPoint({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDeletePkiRevocationDistributionPoint(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgDeletePkiRevocationDistributionPoint:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeletePkiRevocationDistributionPoint:Create', 'Could not create message: ' + e.message)
				}
			}
		},
		async MsgProposeAddX509RootCert({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgProposeAddX509RootCert(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgProposeAddX509RootCert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgProposeAddX509RootCert:Create', 'Could not create message: ' + e.message)
				}
			}
		},
		async MsgProposeRevokeX509RootCert({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgProposeRevokeX509RootCert(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgProposeRevokeX509RootCert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgProposeRevokeX509RootCert:Create', 'Could not create message: ' + e.message)
				}
			}
		},
		async MsgApproveRevokeX509RootCert({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgApproveRevokeX509RootCert(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgApproveRevokeX509RootCert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgApproveRevokeX509RootCert:Create', 'Could not create message: ' + e.message)
				}
			}
		},
		async MsgAddX509Cert({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAddX509Cert(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgAddX509Cert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgAddX509Cert:Create', 'Could not create message: ' + e.message)
				}
			}
		},
		async MsgRevokeNocX509RootCert({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRevokeNocX509RootCert(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgRevokeNocX509RootCert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgRevokeNocX509RootCert:Create', 'Could not create message: ' + e.message)
				}
			}
		},
		async MsgRemoveX509Cert({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRemoveX509Cert(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgRemoveX509Cert:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgRemoveX509Cert:Create', 'Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
